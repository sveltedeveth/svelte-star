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
export type GiTriorbProps = typeof __propDef.props;
export type GiTriorbEvents = typeof __propDef.events;
export type GiTriorbSlots = typeof __propDef.slots;
export default class GiTriorb extends SvelteComponentTyped<GiTriorbProps, GiTriorbEvents, GiTriorbSlots> {
}
export {};
