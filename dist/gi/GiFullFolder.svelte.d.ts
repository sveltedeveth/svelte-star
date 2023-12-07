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
export type GiFullFolderProps = typeof __propDef.props;
export type GiFullFolderEvents = typeof __propDef.events;
export type GiFullFolderSlots = typeof __propDef.slots;
export default class GiFullFolder extends SvelteComponentTyped<GiFullFolderProps, GiFullFolderEvents, GiFullFolderSlots> {
}
export {};
