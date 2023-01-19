package com.armando.customer;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("api/users")
public class CustomerController {
    private final CustomerRepository customerRepository;

    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    record NewCustomerRequest(String name, String email, Integer age) {
    }


    //Get Request
    @GetMapping
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("{userId}")
    public Optional<Customer> getCustomers(@PathVariable("userId") Integer id) {
        return customerRepository.findById(id);
    }

    //Post Request
    @PostMapping
    public void addCostumer(@RequestBody NewCustomerRequest req) {
        Customer customer = new Customer();
        customer.setName(req.name());
        customer.setAge(req.age());
        customer.setEmail(req.email());
        customerRepository.save(customer);
    }

    //Delete Request
    @DeleteMapping("{userId}")
    public void deleteCustomer(@PathVariable("userId") Integer id) {
        customerRepository.deleteById(id);
    }

    //Update request
    @PutMapping("{userId}")
    public Customer updateCustomer(@PathVariable("userId") Integer id, @RequestBody NewCustomerRequest req) {
        Customer customer = customerRepository.findById(id).get();
        customer.setName(req.name());
        customer.setAge(req.age());
        customer.setEmail(req.email());
        customerRepository.save(customer);
        return customer;
    }
}
