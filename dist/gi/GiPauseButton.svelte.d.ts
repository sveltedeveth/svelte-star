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
export type GiPauseButtonProps = typeof __propDef.props;
export type GiPauseButtonEvents = typeof __propDef.events;
export type GiPauseButtonSlots = typeof __propDef.slots;
export default class GiPauseButton extends SvelteComponentTyped<GiPauseButtonProps, GiPauseButtonEvents, GiPauseButtonSlots> {
}
export {};
