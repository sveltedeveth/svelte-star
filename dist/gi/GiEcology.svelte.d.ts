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
export type GiEcologyProps = typeof __propDef.props;
export type GiEcologyEvents = typeof __propDef.events;
export type GiEcologySlots = typeof __propDef.slots;
export default class GiEcology extends SvelteComponentTyped<GiEcologyProps, GiEcologyEvents, GiEcologySlots> {
}
export {};
