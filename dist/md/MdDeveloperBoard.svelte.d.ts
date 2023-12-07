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
export type MdDeveloperBoardProps = typeof __propDef.props;
export type MdDeveloperBoardEvents = typeof __propDef.events;
export type MdDeveloperBoardSlots = typeof __propDef.slots;
export default class MdDeveloperBoard extends SvelteComponentTyped<MdDeveloperBoardProps, MdDeveloperBoardEvents, MdDeveloperBoardSlots> {
}
export {};
