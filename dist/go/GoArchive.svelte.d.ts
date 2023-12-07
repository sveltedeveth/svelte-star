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
export type GoArchiveProps = typeof __propDef.props;
export type GoArchiveEvents = typeof __propDef.events;
export type GoArchiveSlots = typeof __propDef.slots;
export default class GoArchive extends SvelteComponentTyped<GoArchiveProps, GoArchiveEvents, GoArchiveSlots> {
}
export {};
