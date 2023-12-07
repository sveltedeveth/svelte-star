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
export type GiSpadesProps = typeof __propDef.props;
export type GiSpadesEvents = typeof __propDef.events;
export type GiSpadesSlots = typeof __propDef.slots;
export default class GiSpades extends SvelteComponentTyped<GiSpadesProps, GiSpadesEvents, GiSpadesSlots> {
}
export {};
