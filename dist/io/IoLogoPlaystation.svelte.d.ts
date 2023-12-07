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
export type IoLogoPlaystationProps = typeof __propDef.props;
export type IoLogoPlaystationEvents = typeof __propDef.events;
export type IoLogoPlaystationSlots = typeof __propDef.slots;
export default class IoLogoPlaystation extends SvelteComponentTyped<IoLogoPlaystationProps, IoLogoPlaystationEvents, IoLogoPlaystationSlots> {
}
export {};
