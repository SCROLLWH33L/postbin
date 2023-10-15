# Postbin

This is a vulnerable Boot-To-Root VM created to exercise web hacking and Linux privilege escalation skills.

## Setup

This VM is built using [Vagrant](https://www.vagrantup.com/), so ensure you have it installed. Additionally, this VM requires [VirtualBox](https://www.virtualbox.org/) or [libvirt](https://libvirt.org/) to be installed. I recommend VirtualBox since Vagrant ships out of the box with support for it.

With all the required software installed, clone the repository using the following command:

```
git clone https://github.com/SCROLLWH33L/postbin.git
```

Then, inside the repository, run the following command to build and provision the VM:

```
vagrant up
```

When you are done pentesting the VM, run the following command to remove it from your system:

```
vagrant destroy
```
