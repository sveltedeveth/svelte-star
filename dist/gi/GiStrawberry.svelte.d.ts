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
export type GiStrawberryProps = typeof __propDef.props;
export type GiStrawberryEvents = typeof __propDef.events;
export type GiStrawberrySlots = typeof __propDef.slots;
export default class GiStrawberry extends SvelteComponentTyped<GiStrawberryProps, GiStrawberryEvents, GiStrawberrySlots> {
}
export {};
