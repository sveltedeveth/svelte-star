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
export type GiVampireDraculaProps = typeof __propDef.props;
export type GiVampireDraculaEvents = typeof __propDef.events;
export type GiVampireDraculaSlots = typeof __propDef.slots;
export default class GiVampireDracula extends SvelteComponentTyped<GiVampireDraculaProps, GiVampireDraculaEvents, GiVampireDraculaSlots> {
}
export {};
