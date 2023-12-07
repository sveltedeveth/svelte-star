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
export type GiEyestalkProps = typeof __propDef.props;
export type GiEyestalkEvents = typeof __propDef.events;
export type GiEyestalkSlots = typeof __propDef.slots;
export default class GiEyestalk extends SvelteComponentTyped<GiEyestalkProps, GiEyestalkEvents, GiEyestalkSlots> {
}
export {};
