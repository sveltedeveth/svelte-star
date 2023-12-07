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
export type GiFilesProps = typeof __propDef.props;
export type GiFilesEvents = typeof __propDef.events;
export type GiFilesSlots = typeof __propDef.slots;
export default class GiFiles extends SvelteComponentTyped<GiFilesProps, GiFilesEvents, GiFilesSlots> {
}
export {};
