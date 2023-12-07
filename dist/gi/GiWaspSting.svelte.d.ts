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
export type GiWaspStingProps = typeof __propDef.props;
export type GiWaspStingEvents = typeof __propDef.events;
export type GiWaspStingSlots = typeof __propDef.slots;
export default class GiWaspSting extends SvelteComponentTyped<GiWaspStingProps, GiWaspStingEvents, GiWaspStingSlots> {
}
export {};
