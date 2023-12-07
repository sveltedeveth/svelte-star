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
export type GiTimeTrapProps = typeof __propDef.props;
export type GiTimeTrapEvents = typeof __propDef.events;
export type GiTimeTrapSlots = typeof __propDef.slots;
export default class GiTimeTrap extends SvelteComponentTyped<GiTimeTrapProps, GiTimeTrapEvents, GiTimeTrapSlots> {
}
export {};
