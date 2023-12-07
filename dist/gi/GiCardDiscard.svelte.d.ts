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
export type GiCardDiscardProps = typeof __propDef.props;
export type GiCardDiscardEvents = typeof __propDef.events;
export type GiCardDiscardSlots = typeof __propDef.slots;
export default class GiCardDiscard extends SvelteComponentTyped<GiCardDiscardProps, GiCardDiscardEvents, GiCardDiscardSlots> {
}
export {};
