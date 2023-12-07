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
export type FaBiohazardProps = typeof __propDef.props;
export type FaBiohazardEvents = typeof __propDef.events;
export type FaBiohazardSlots = typeof __propDef.slots;
export default class FaBiohazard extends SvelteComponentTyped<FaBiohazardProps, FaBiohazardEvents, FaBiohazardSlots> {
}
export {};
