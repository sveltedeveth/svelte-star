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
export type GiSparklingSabreProps = typeof __propDef.props;
export type GiSparklingSabreEvents = typeof __propDef.events;
export type GiSparklingSabreSlots = typeof __propDef.slots;
export default class GiSparklingSabre extends SvelteComponentTyped<GiSparklingSabreProps, GiSparklingSabreEvents, GiSparklingSabreSlots> {
}
export {};
