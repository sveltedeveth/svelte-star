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
export type GiSaberSlashProps = typeof __propDef.props;
export type GiSaberSlashEvents = typeof __propDef.events;
export type GiSaberSlashSlots = typeof __propDef.slots;
export default class GiSaberSlash extends SvelteComponentTyped<GiSaberSlashProps, GiSaberSlashEvents, GiSaberSlashSlots> {
}
export {};
