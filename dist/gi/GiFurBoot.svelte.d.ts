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
export type GiFurBootProps = typeof __propDef.props;
export type GiFurBootEvents = typeof __propDef.events;
export type GiFurBootSlots = typeof __propDef.slots;
export default class GiFurBoot extends SvelteComponentTyped<GiFurBootProps, GiFurBootEvents, GiFurBootSlots> {
}
export {};
