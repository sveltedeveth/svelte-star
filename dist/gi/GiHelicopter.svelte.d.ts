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
export type GiHelicopterProps = typeof __propDef.props;
export type GiHelicopterEvents = typeof __propDef.events;
export type GiHelicopterSlots = typeof __propDef.slots;
export default class GiHelicopter extends SvelteComponentTyped<GiHelicopterProps, GiHelicopterEvents, GiHelicopterSlots> {
}
export {};
