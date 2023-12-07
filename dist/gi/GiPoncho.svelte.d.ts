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
export type GiPonchoProps = typeof __propDef.props;
export type GiPonchoEvents = typeof __propDef.events;
export type GiPonchoSlots = typeof __propDef.slots;
export default class GiPoncho extends SvelteComponentTyped<GiPonchoProps, GiPonchoEvents, GiPonchoSlots> {
}
export {};
