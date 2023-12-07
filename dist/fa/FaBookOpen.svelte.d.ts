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
export type FaBookOpenProps = typeof __propDef.props;
export type FaBookOpenEvents = typeof __propDef.events;
export type FaBookOpenSlots = typeof __propDef.slots;
export default class FaBookOpen extends SvelteComponentTyped<FaBookOpenProps, FaBookOpenEvents, FaBookOpenSlots> {
}
export {};
