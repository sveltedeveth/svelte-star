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
export type GiPeanutProps = typeof __propDef.props;
export type GiPeanutEvents = typeof __propDef.events;
export type GiPeanutSlots = typeof __propDef.slots;
export default class GiPeanut extends SvelteComponentTyped<GiPeanutProps, GiPeanutEvents, GiPeanutSlots> {
}
export {};
