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
export type MdExitToAppProps = typeof __propDef.props;
export type MdExitToAppEvents = typeof __propDef.events;
export type MdExitToAppSlots = typeof __propDef.slots;
export default class MdExitToApp extends SvelteComponentTyped<MdExitToAppProps, MdExitToAppEvents, MdExitToAppSlots> {
}
export {};
