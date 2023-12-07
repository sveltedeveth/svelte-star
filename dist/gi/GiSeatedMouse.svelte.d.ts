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
export type GiSeatedMouseProps = typeof __propDef.props;
export type GiSeatedMouseEvents = typeof __propDef.events;
export type GiSeatedMouseSlots = typeof __propDef.slots;
export default class GiSeatedMouse extends SvelteComponentTyped<GiSeatedMouseProps, GiSeatedMouseEvents, GiSeatedMouseSlots> {
}
export {};
