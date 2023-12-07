import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaPhoenixFrameworkProps = typeof __propDef.props;
export type FaPhoenixFrameworkEvents = typeof __propDef.events;
export type FaPhoenixFrameworkSlots = typeof __propDef.slots;
export default class FaPhoenixFramework extends SvelteComponentTyped<FaPhoenixFrameworkProps, FaPhoenixFrameworkEvents, FaPhoenixFrameworkSlots> {
}
export {};
