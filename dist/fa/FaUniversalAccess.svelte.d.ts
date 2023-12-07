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
export type FaUniversalAccessProps = typeof __propDef.props;
export type FaUniversalAccessEvents = typeof __propDef.events;
export type FaUniversalAccessSlots = typeof __propDef.slots;
export default class FaUniversalAccess extends SvelteComponentTyped<FaUniversalAccessProps, FaUniversalAccessEvents, FaUniversalAccessSlots> {
}
export {};
