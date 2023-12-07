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
export type GiCornProps = typeof __propDef.props;
export type GiCornEvents = typeof __propDef.events;
export type GiCornSlots = typeof __propDef.slots;
export default class GiCorn extends SvelteComponentTyped<GiCornProps, GiCornEvents, GiCornSlots> {
}
export {};
