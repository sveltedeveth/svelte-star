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
export type MdBeachAccessProps = typeof __propDef.props;
export type MdBeachAccessEvents = typeof __propDef.events;
export type MdBeachAccessSlots = typeof __propDef.slots;
export default class MdBeachAccess extends SvelteComponentTyped<MdBeachAccessProps, MdBeachAccessEvents, MdBeachAccessSlots> {
}
export {};
