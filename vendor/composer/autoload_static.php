<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit48d6b61de4d381c26cccd2592759ce15
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Ascherer\\VkDesign\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Ascherer\\VkDesign\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit48d6b61de4d381c26cccd2592759ce15::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit48d6b61de4d381c26cccd2592759ce15::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit48d6b61de4d381c26cccd2592759ce15::$classMap;

        }, null, ClassLoader::class);
    }
}