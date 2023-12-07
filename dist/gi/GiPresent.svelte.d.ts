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
export type GiPresentProps = typeof __propDef.props;
export type GiPresentEvents = typeof __propDef.events;
export type GiPresentSlots = typeof __propDef.slots;
export default class GiPresent extends SvelteComponentTyped<GiPresentProps, GiPresentEvents, GiPresentSlots> {
}
export {};
