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
export type GiArmProps = typeof __propDef.props;
export type GiArmEvents = typeof __propDef.events;
export type GiArmSlots = typeof __propDef.slots;
export default class GiArm extends SvelteComponentTyped<GiArmProps, GiArmEvents, GiArmSlots> {
}
export {};
