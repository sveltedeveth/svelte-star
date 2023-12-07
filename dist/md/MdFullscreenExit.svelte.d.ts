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
export type MdFullscreenExitProps = typeof __propDef.props;
export type MdFullscreenExitEvents = typeof __propDef.events;
export type MdFullscreenExitSlots = typeof __propDef.slots;
export default class MdFullscreenExit extends SvelteComponentTyped<MdFullscreenExitProps, MdFullscreenExitEvents, MdFullscreenExitSlots> {
}
export {};
