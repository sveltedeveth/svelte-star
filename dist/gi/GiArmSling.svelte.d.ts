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
export type GiArmSlingProps = typeof __propDef.props;
export type GiArmSlingEvents = typeof __propDef.events;
export type GiArmSlingSlots = typeof __propDef.slots;
export default class GiArmSling extends SvelteComponentTyped<GiArmSlingProps, GiArmSlingEvents, GiArmSlingSlots> {
}
export {};
