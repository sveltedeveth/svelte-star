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
export type GiGooseProps = typeof __propDef.props;
export type GiGooseEvents = typeof __propDef.events;
export type GiGooseSlots = typeof __propDef.slots;
export default class GiGoose extends SvelteComponentTyped<GiGooseProps, GiGooseEvents, GiGooseSlots> {
}
export {};
