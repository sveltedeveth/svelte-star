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
export type GiBrodieHelmetProps = typeof __propDef.props;
export type GiBrodieHelmetEvents = typeof __propDef.events;
export type GiBrodieHelmetSlots = typeof __propDef.slots;
export default class GiBrodieHelmet extends SvelteComponentTyped<GiBrodieHelmetProps, GiBrodieHelmetEvents, GiBrodieHelmetSlots> {
}
export {};
