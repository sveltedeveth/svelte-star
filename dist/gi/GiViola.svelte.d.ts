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
export type GiViolaProps = typeof __propDef.props;
export type GiViolaEvents = typeof __propDef.events;
export type GiViolaSlots = typeof __propDef.slots;
export default class GiViola extends SvelteComponentTyped<GiViolaProps, GiViolaEvents, GiViolaSlots> {
}
export {};
