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
export type IoMdThunderstormProps = typeof __propDef.props;
export type IoMdThunderstormEvents = typeof __propDef.events;
export type IoMdThunderstormSlots = typeof __propDef.slots;
export default class IoMdThunderstorm extends SvelteComponentTyped<IoMdThunderstormProps, IoMdThunderstormEvents, IoMdThunderstormSlots> {
}
export {};
