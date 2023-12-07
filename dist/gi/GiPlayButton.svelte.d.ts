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
export type GiPlayButtonProps = typeof __propDef.props;
export type GiPlayButtonEvents = typeof __propDef.events;
export type GiPlayButtonSlots = typeof __propDef.slots;
export default class GiPlayButton extends SvelteComponentTyped<GiPlayButtonProps, GiPlayButtonEvents, GiPlayButtonSlots> {
}
export {};
