import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | null | undefined;
        viewBox: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IconBaseProps = typeof __propDef.props;
export type IconBaseEvents = typeof __propDef.events;
export type IconBaseSlots = typeof __propDef.slots;
export default class IconBase extends SvelteComponentTyped<IconBaseProps, IconBaseEvents, IconBaseSlots> {
}
export {};
