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
export type GiTripleCornProps = typeof __propDef.props;
export type GiTripleCornEvents = typeof __propDef.events;
export type GiTripleCornSlots = typeof __propDef.slots;
export default class GiTripleCorn extends SvelteComponentTyped<GiTripleCornProps, GiTripleCornEvents, GiTripleCornSlots> {
}
export {};
