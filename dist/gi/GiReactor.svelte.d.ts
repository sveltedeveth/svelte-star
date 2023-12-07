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
export type GiReactorProps = typeof __propDef.props;
export type GiReactorEvents = typeof __propDef.events;
export type GiReactorSlots = typeof __propDef.slots;
export default class GiReactor extends SvelteComponentTyped<GiReactorProps, GiReactorEvents, GiReactorSlots> {
}
export {};
