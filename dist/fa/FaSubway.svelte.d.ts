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
export type FaSubwayProps = typeof __propDef.props;
export type FaSubwayEvents = typeof __propDef.events;
export type FaSubwaySlots = typeof __propDef.slots;
export default class FaSubway extends SvelteComponentTyped<FaSubwayProps, FaSubwayEvents, FaSubwaySlots> {
}
export {};
