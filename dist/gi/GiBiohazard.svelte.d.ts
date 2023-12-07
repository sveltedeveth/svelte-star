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
export type GiBiohazardProps = typeof __propDef.props;
export type GiBiohazardEvents = typeof __propDef.events;
export type GiBiohazardSlots = typeof __propDef.slots;
export default class GiBiohazard extends SvelteComponentTyped<GiBiohazardProps, GiBiohazardEvents, GiBiohazardSlots> {
}
export {};
