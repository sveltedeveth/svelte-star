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
export type GiJawboneProps = typeof __propDef.props;
export type GiJawboneEvents = typeof __propDef.events;
export type GiJawboneSlots = typeof __propDef.slots;
export default class GiJawbone extends SvelteComponentTyped<GiJawboneProps, GiJawboneEvents, GiJawboneSlots> {
}
export {};
