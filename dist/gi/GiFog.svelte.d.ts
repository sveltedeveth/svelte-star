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
export type GiFogProps = typeof __propDef.props;
export type GiFogEvents = typeof __propDef.events;
export type GiFogSlots = typeof __propDef.slots;
export default class GiFog extends SvelteComponentTyped<GiFogProps, GiFogEvents, GiFogSlots> {
}
export {};
