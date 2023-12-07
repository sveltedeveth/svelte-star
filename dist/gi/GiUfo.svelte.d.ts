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
export type GiUfoProps = typeof __propDef.props;
export type GiUfoEvents = typeof __propDef.events;
export type GiUfoSlots = typeof __propDef.slots;
export default class GiUfo extends SvelteComponentTyped<GiUfoProps, GiUfoEvents, GiUfoSlots> {
}
export {};
