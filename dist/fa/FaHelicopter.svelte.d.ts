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
export type FaHelicopterProps = typeof __propDef.props;
export type FaHelicopterEvents = typeof __propDef.events;
export type FaHelicopterSlots = typeof __propDef.slots;
export default class FaHelicopter extends SvelteComponentTyped<FaHelicopterProps, FaHelicopterEvents, FaHelicopterSlots> {
}
export {};
