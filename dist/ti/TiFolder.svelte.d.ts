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
export type TiFolderProps = typeof __propDef.props;
export type TiFolderEvents = typeof __propDef.events;
export type TiFolderSlots = typeof __propDef.slots;
export default class TiFolder extends SvelteComponentTyped<TiFolderProps, TiFolderEvents, TiFolderSlots> {
}
export {};
