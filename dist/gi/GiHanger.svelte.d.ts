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
export type GiHangerProps = typeof __propDef.props;
export type GiHangerEvents = typeof __propDef.events;
export type GiHangerSlots = typeof __propDef.slots;
export default class GiHanger extends SvelteComponentTyped<GiHangerProps, GiHangerEvents, GiHangerSlots> {
}
export {};
