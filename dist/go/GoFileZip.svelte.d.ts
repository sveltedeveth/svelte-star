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
export type GoFileZipProps = typeof __propDef.props;
export type GoFileZipEvents = typeof __propDef.events;
export type GoFileZipSlots = typeof __propDef.slots;
export default class GoFileZip extends SvelteComponentTyped<GoFileZipProps, GoFileZipEvents, GoFileZipSlots> {
}
export {};
